import { useEffect, useState } from 'react';

function FetchMarkdown() {
  const [markdown, setMarkdown] = useState('');

useEffect(() => {
    fetch('./../public/post/post1.md')
        .then(response => response.text())
        .then(text => setMarkdown(text));
}, []);


  return (

    <div>
      <pre>{markdown}</pre>
    </div>

  );
}

export default FetchMarkdown;
