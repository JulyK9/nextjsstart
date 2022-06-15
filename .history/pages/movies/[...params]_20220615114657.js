import { useRouter } from "next/router";

export default function Detail() {
  const router = useRouter();
  const [title, id] = router.query.params || []; // 2개의 element를 가지는 배열이라는 걸 콘솔에서 확인했음
  console.log(router);
  return (
    <div>
      <h4>{title}</h4>
    </div>
  );
}
