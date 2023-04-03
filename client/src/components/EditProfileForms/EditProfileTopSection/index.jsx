import "./style.css";
const EditProfileTopSection = () => {
  return (
    <article>
        <section className="edit-profile-avatar">
          <div className="images-component">
            <img src="../../assets/avatar-placeholder.svg" alt="Avatar do usuario"/>
            <img src="../../assets/edit-profile.svg" alt=""/>
          </div>
        </section>

        <hr className="edit-profile-hr" />
    </article>
  );
}

export default EditProfileTopSection;