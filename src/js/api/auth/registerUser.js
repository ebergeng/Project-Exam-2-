export async function registerUser(profile) {
  const url = "https://api.noroff.dev/api/v1/holidaze/auth/register";

  const options = {
    headers: {
      "Content-Type": "application/json",
    },
    method: "POST",
    body: JSON.stringify(profile),
  };

  const respons = await fetch(url, options);
  const json = await respons.json();
  console.log(json);
  return json;
}
