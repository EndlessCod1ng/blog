interface ProfilePageProps {
  className?: string;
}
const ProfilePage = ({ className }: ProfilePageProps) => {
  return (
    <div className={`${className ? className : ""}`}>
      <div>ProfilePage</div>
    </div>
  );
};
export default ProfilePage;
