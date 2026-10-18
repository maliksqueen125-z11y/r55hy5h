export default {
  async fetch(request) {
    const url = new URL(request.url);

    if (url.pathname === "/preview") {
      return Response.redirect(
        "https://cdn.tinyurl.com/profiles/0HpVZuiLpZeE6LQuxIpBwOyBTB8aQDoHm8OQpEgm.jpg",
        302
      );
    }

    if (url.pathname === "/click") {
      return Response.redirect(
        "https://possiblyliar.com/jtdyzwx9dp?key=6ceffee47be217154eecc6045d5bb044",
        302
      );
    }

    return new Response("Not Found", { status: 404 });
  }
};
