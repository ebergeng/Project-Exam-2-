export async function loginUser(profile) {
  const url = "https://api.noroff.dev/api/v1/holidaze/auth/login";

  const options = {
    headers: {
      "Content-Type": "application/json",
    },
    method: "POST",
    body: JSON.stringify(profile),
  };

  const respons = await fetch(url, options);
  const json = await respons.json();
  return json;
}
