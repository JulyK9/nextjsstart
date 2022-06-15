export default function App(Components, pageProps) {
  return (
    <div>
      <Components {...pageProps} />
      <span>Hello</span>
    </div>
  );
}
