"use server";

export async function reactActionExample(hugeJson: any) {
  try {
    // Simulate a long task with a delay
    await new Promise((resolve) => setTimeout(resolve, 2000));

    // Make some fetch call
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");

    // Return success message
    return {
      status: "success",
      message: "Task completed successfully",
      data: await response.json(),
      hugeJson,
    };
  } catch (error) {
    // Return error message
    return { status: "error", message: "Task failed", error };
  }
}
