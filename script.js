 const params = new URLSearchParams(window.location.search)
  
  const name = params.get('name') || 'Your Pharmacy'
  const location1 = params.get('location') || 'Nairobi'
  const phone = params.get('phone') || '+254 700 000 000'
  const exact = params.get("exact") || "444432"

  document.getElementById('biz-name').textContent = name
  document.getElementById('biz-location').textContent = 'Your Trusted Pharmacy in ' + location
  document.getElementById('biz-phone').textContent = phone
  document.getElementById("biz-exact-location").textContent = exact


  console.log("Hello World")