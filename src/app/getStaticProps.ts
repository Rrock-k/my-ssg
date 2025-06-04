export async function getStaticProps() {
  // Любая синхронная или async-логика получения данных
  const initialCount = 5;            // пусть будет демо-значение
  return { props: { initialCount } };
}
