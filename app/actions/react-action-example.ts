"use server";

export async function reactActionExample() {
  try {
    // Simulate a long task with a delay
    await new Promise((resolve) => setTimeout(resolve, 2000));

    // Return success message
    return { status: "success", message: "Task completed successfully" };
  } catch (error) {
    // Return error message
    return { status: "error", message: "Task failed", error };
  }
}
