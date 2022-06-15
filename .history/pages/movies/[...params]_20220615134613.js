import { useRouter } from "next/router";
import Seo from "../../components/Seo";

// 컴포넌틑 내부에서 router를 사용하면 router는 프론트에서만 실행됨
export default function Detail({ params }) {
  const router = useRouter();
  const [title, id] = params || []; // 2개의 element를 가지는 배열이라는 걸 콘솔에서 확인했음
  // console.log(router);
  return (
    <div>
      <Seo title={title} />
      <h4>{title}</h4>
    </div>
  );
}

// 영화제목이랑 id를 얻기 위해(URL 정보를 가져오기 위해) getServerSideProps 를 사용했음 (API에서 데이터를 fetch 해오지는 않음)
// SEO 최적화와 함께 유저에게 로딩단계를 보여주고 싶지 않다면 getSerrverSideProps 사용
export function getServerSideProps({ params: { params } }) {
  // console.log(ctx);
  return {
    props: {
      params,
    },
  };
}
