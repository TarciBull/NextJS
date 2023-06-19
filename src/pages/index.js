
import Link from "next/link";
import Users from "../../public/components/users";

export const getStaticProps = async () => {
  const response = await fetch("https://tz.smart-ui.pro");
  const data = await response.json();
  return {
    props: { data: data },
  };
};
function loadVideo() {
  let container = document.getElementById("video-container");
  let iframe = document.createElement("iframe");
  let thumbnail = document.getElementById("thumbnail");
  let width = thumbnail.offsetWidth;
  let height = thumbnail.offsetHeight;
  iframe.setAttribute("src", "https://www.youtube.com/embed/RK1K2bCg4J8?autoplay=1");
  iframe.setAttribute("width", `${width}px`);
  iframe.setAttribute("height", `${height}px`);
  container.removeChild(thumbnail);
  container.appendChild(iframe);
}

export default function MainComp({ data }) {
  return (
    <>
      <div className={'wrapper'}>
        <div className={'textWrap'}>
          <h2>{data.video.embed}</h2>
          <p>{data.video.text}</p>
          <Link href={data.video.link} target="_blank">
            {data.video.link}
          </Link>
        </div>
        <div id="video-container" onClick={loadVideo}>
      <img id="thumbnail" src="https://img.youtube.com/vi/RK1K2bCg4J8/hqdefault.jpg" />
    </div>
      </div>
    <Users usersData ={data}/>
    </>
  );
}
