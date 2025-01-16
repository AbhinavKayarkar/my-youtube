import React from "react";
import { USER_ICON } from "../utils/constants";

const Comments = () => {
  const commentsData = [
    {
      name: "Abhinav Kayarkar",
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      replies: [
        {
          name: "Abhinav Kayarkar",
          text: "Lorem Ipsum is simply dummy text of the printing and typesetting ",
          replies: [
            {
              name: "Abhinav Kayarkar",
              text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
              replies: [
                {
                  name: "Abhinav Kayarkar",
                  text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
                  replies: [
                    {
                      name: "Abhinav Kayarkar",
                      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
                      replies: [
                        {
                          name: "Abhinav Kayarkar",
                          text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.4",
                        },
                        {
                          name: "Abhinav Kayarkar",
                          text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
                        },
                      ],
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      name: "Abhinav Kayarkar",
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      replies: [],
    },
    {
      name: "Abhinav Kayarkar",
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      replies: [],
    },
    {
      name: "Abhinav Kayarkar",
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      replies: [],
    },
    {
      name: "Abhinav Kayarkar",
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      replies: [],
    },
    {
      name: "Abhinav Kayarkar",
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      replies: [],
    },
  ];

  const Comments = ({ data }) => {
    const { name, text } = data;
    return (
      <div className="flex shadow bg-gray-200 w-2/3 m-2 rounded-lg">
        <img className="h-8 w-8 m-1" src={USER_ICON} alt="user-icon" />
        <div>
          <h5 className="font-semibold">{name}</h5>
          <p>{text}</p>
        </div>
      </div>
    );
  };

  const CommentsList = ({ comments }) => {
    return (
      <div>
        {comments?.map((c) => {
          return (
            <>
              <Comments data={c} />
              <div className="ml-3 px-2 border border-l-black border-r-transparent border-b-transparent border-t-transparent">
                <CommentsList comments={c?.replies} />
              </div>
            </>
          );
        })}
      </div>
    );
  };
  return (
    <div>
      <h1 className="font-bold text-xl mt-1 p-2">Comments :</h1>
      <CommentsList comments={commentsData} />
    </div>
  );
};

export default Comments;
