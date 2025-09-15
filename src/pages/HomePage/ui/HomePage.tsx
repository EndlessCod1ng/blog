interface HomePageProps {
  className?: string;
}
const HomePage = ({ className }: HomePageProps) => {
  return (
    <div className={`${className ? className : ""}`}>
      <div>HomePage</div>
    </div>
  );
};
export default HomePage;
