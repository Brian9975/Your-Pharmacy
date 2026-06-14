 const params = new URLSearchParams(window.location.search)
  
  const name1 = params.get('name1') || 'Your Pharmacy'
  const location1 = params.get('location1') || 'Nairobi'
  const phone = params.get('phone') || '+254 700 000 000'
  const exact = params.get("exact") || "444432"

  document.querySelectorAll('.biz-name').forEach(el => el.textContent = name1)
  document.querySelectorAll('.biz-location').forEach(el => el.textContent = location1)
  document.getElementById('biz-phone').textContent = phone
  document.getElementById("biz-exact-location").textContent = exact



