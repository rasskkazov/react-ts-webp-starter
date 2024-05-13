import { mockAuth } from "@/shared/lib/mockAuth";

export const login = async () => {
  const login = prompt("enter login (admin)");
  const res = await mockAuth(login);
  if (res.status !== 200) return;
  localStorage.setItem("token", res.token);
  console.log(res);
};
