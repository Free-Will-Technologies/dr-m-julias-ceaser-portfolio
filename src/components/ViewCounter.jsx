import { useEffect, useRef, useState } from "react";

function ViewCounter() {
  const [views, setViews] = useState(0);
  const hasFetched = useRef(false);

  useEffect(() => {
    if (hasFetched.current) return;
    hasFetched.current = true;

    fetch(`${process.env.REACT_APP_API_URL}`)
      .then(res => res.json())
      .then(data => setViews(data.views))
      .catch(err => console.error(err));
  }, []);

  console.log("API URL:", process.env.REACT_APP_API_URL);


  return (
    <div >
      <p className="footer-text">Website Views: {views}</p>
    </div>
  );
}

export default ViewCounter;
