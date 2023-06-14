const iframe = document.createElement('iframe');
iframe.classList.add('is-hidden');
iframe.setAttribute('aria-hidden', 'true');
iframe.src = 'https://auth.eatingwell.com/realms/etg/protocol/openid-connect/auth?client_id=etg&response_type=code&redirect_uri=https%3A%2F%2Fwww.eatingwell.com%2Fauthentication%2Fcode-exchange&state=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJSZE5BREkvWU40dlNYcW9JaWtML2FTdUo4dXBTZmxUR1BlTEhRODhtWlljPSIsInJlZGlyZWN0VXJsIjoiaHR0cHM6Ly93d3cuZWF0aW5nd2VsbC5jb20vIiwiaXNzIjoiRG90ZGFzaCBNZXJlZGl0aCIsImV4cCI6MTY4Njc1ODIxMiwiaWF0IjoxNjg2NzU2NDEyLCJoaWRlQ29uZmlybWF0aW9uQmFubmVyIjpmYWxzZX0.Ww_IHIYLxmF_dh5QoeCAw49FsUxCNCxLNMkiMs6900Q&scope=openid&reg_source=27520&prompt=none';
iframe.addEventListener('load', () => {
  console.log('iframe loaded');
  console.log(iframe.contentWindow.document.title);
});
document.body.appendChild(iframe);