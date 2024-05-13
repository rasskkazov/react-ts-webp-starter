const validToken =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImJvZ2RhbkBnbWFpbC5jb20iLCJpZCI6NDg3NDksImlhdCI6MTcxNTYwODE2MSwiZXhwIjoxNzE1Njk0NTYxfQ.5CzTRlkJlBarYRpmSvOu6GPowcLUwbnWDX5KI7dBXPU";

export const mockAuth = (login: string) => {
  const res: Promise<{ status: number; token: string }> = new Promise(
    (resolve) => {
      setTimeout(() => {
        if (login !== "admin") resolve({ status: 401, token: "" });
        resolve({
          status: 200,
          token: validToken,
        });
      }, 1000);
    }
  );
  return res;
};

// export const mockLogout = () => {};
