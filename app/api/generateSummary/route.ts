import openai from "@/openai";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const { todos } = await request.json();
  console.log(todos);
  const response = await openai.createChatCompletion({
    model: "gpt-3.5-turbo",
    temperature: 0.8,
    n: 1,
    stream: false,
    messages: [
      {
        role: "system",
        content:
          "When responding welcome the user as always Meet and say welcome to my app! Limit the response to 200 characters!",
      },
      {
        role: "user",
        content: `Hi There, provide a summary of the following todos. Count how many todos are in each category such as Todo, Inprogress and Done and then tell user to have a productive day!, Here is data: ${JSON.stringify(
          todos
        )}`,
      },
    ],
  });
  const { data } = response;
  console.log(data);
  console.log(data.choices[0].message);

  return NextResponse.json(data.choices[0].message);
}
