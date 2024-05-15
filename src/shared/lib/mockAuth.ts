const validToken =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImJvZ2RhbkBnbWFpbC5jb20iLCJpZCI6NDg3NDksImlhdCI6MTcxNTYwODE2MSwiZXhwIjoxNzE1Njk0NTYxfQ.5CzTRlkJlBarYRpmSvOu6GPowcLUwbnWDX5KI7dBXPU";

export const mockAuth = (login: string) => {
  const res: Promise<{
    login: string | null;
    status: number;
    token: string | null;
  }> = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (login !== "admin") {
        const loginErr = new Error("invalid login");
        reject(loginErr);
      }
      resolve({
        login,
        status: 200,
        token: validToken,
      });
    }, 1000);
  });
  return res;
};
