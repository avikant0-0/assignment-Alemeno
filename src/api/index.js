import { createClient } from "@sanity/client";
import { nanoid } from "nanoid";
const client = createClient({
  projectId: "qpfd3u9a",
  dataset: "production",
  apiVersion: "2021-08-29",
  token:
    "skIu4xupk0t20LkEn5HWVXjcaHmzkVevijaIGnzbQN6hX1ppFUkAK5AumVTxrgjE1Olz2aWcKnhJchNwrZdVy728I3yZXYRiFcFh5AgISY1o66iKGqEaW7PKUFk24Hya4wK8BwhnCaB2TY6LIrB3YZiNGYew3fG80vRQlpqhJqGbkKeXtLe0",
  useCdn: false,
  ignoreBrowserTokenWarning: true,
});

const fetchallcourses = async () => {
  const result = await client.fetch(`*[_type == "courses"] | order(_createdAt)
    { 
      "likes" : count(likes),
      instructor,
      schedule,
      enrollment,
      description,
      title,
      duration,
      prerequisites,
      location,
      _createdAt,
      syllabus,
      "imageurl" : mainImage.asset->url,
      subscribers[] -> {
        name,
        gmail,
        }  
      }
    `);
  // console.log(result);
  return result;
};

const fetchusercourses = async (userid) => {
  const result =
    await client.fetch(`  *[_type == "subscribers" && _id == "${userid}"] | order(_updatedAt)
    {
        _id, name, gmail, 
        coursetaken[]{
          percentage,
          
          courseRef -> {
            ...,
            "imageurl" : mainImage.asset->url,
            "subscribers" :subscribers[]->{name,gmail}
 
          }
        }
     }`);
  // console.log(result);
  return result;
};

const setcompletedsanity = async (userid, title) => {
  // client.patch
  console.log(userid, title);
  let courseIndex = await client.fetch(
    `*[_id == "${userid}"] { "courseIndex": 
    coursetaken[].courseRef->title,
      }`
  );
  courseIndex = courseIndex[0].courseIndex;
  console.log(courseIndex);
  let finalindex;
  for (let i = 0; i < courseIndex.length; i++) {
    if (courseIndex[i] === title) {
      finalindex = i;
    }
  }
  console.log(finalindex);
  const mutation = {
    patch: {
      id: userid,
      set: {
        [`coursetaken[${finalindex}].percentage`]: 100,
      },
    },
  };

  // Execute the mutation and get the result
  client.mutate(mutation);
};

const setpressedlikesanity = async (userid, title) => {
  console.log(userid, title);
  const course = await client.fetch(
    '*[_type == "courses" && title == $title][0]',
    { title }
  );
  // console.log(course);
  client
    .patch(userid)
    .setIfMissing({ likedcourses: [] })
    .append("likedcourses", [
      {
        _type: "reference",
        _ref: course._id,
        _key: nanoid(),
      },
    ])
    .commit();

  client
    .patch(course._id)
    .setIfMissing({ likes: [] })
    .append("likes", [
      {
        _type: "reference",
        _ref: userid,
        _key: nanoid(),
      },
    ])
    .commit()
    .then((data) => console.log(data));
};

export {
  fetchallcourses,
  fetchusercourses,
  setcompletedsanity,
  setpressedlikesanity,
};
