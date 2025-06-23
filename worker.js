addEventListener('fetch', event => {
  event.respondWith(handleRequest(event))
})

async function handleRequest(event) {
  const url = new URL(event.request.url)

  // Redirect root to /docs/welcome
  if (url.pathname === '/' || url.pathname === '') {
    return Response.redirect(`${url.origin}/docs/welcome`, 302)
  }

}
