import React from "react";
import placeData from "./placeData";

function Places() {
  const [Places, setPlaces] = React.useState(placeData);
  const [name, setName] = React.useState("");
  const [location, setlocation] = React.useState("");
  const [imageUrl, setImageUrl] = React.useState("");
  const [modalVisibility, setModalVisibility] = React.useState(false);
  const placesList = Places.map((place, index) => (
    <div className="place-card" key={index}>
      <h1>Name: {place.name}</h1>
      <h2>Place: {place.location}</h2>
      <img src={place.imageUrl} alt={place.name} />
      <button onClick={() => deleteCard(index)}>Delete</button>
    </div>
  ));

  function toggleModal() {
    setModalVisibility((visibility) => !visibility);
  }

  function changeName(event) {
    const updateName = event.target.value;
    setName(updateName);
  }

  function changeLocation(event) {
    const updateLocation = event.target.value;
    setlocation(updateLocation);
  }

  function changeImageUrl(event) {
    const updateImageUrl = event.target.value;
    setImageUrl(updateImageUrl);
  }

  function updatePlace(formData) {
    const place = {
      name: formData.get("name"),
      location: formData.get("location"),
      imageUrl: formData.get("imageUrl"),
    };

    setPlaces((placeData) => [...placeData, place]);

    setName("");

    setlocation("");

    setImageUrl("");

    setModalVisibility(false);
  }

  function deleteCard(indexToDelete) {
    const updatedPlaces = Places.filter((_, index) => index !== indexToDelete);
    setPlaces(updatedPlaces);
  }

  return (
    <>
      {modalVisibility === true && (
        <div className="modal-overlay">
          <form action={updatePlace} className="enter-place">
            <label htmlFor="username">Name</label>
            <input
              onChange={changeName}
              type="text"
              id="username"
              name="name"
              value={name}
            />

            <label htmlFor="location">Location</label>
            <input
              onChange={changeLocation}
              type="text"
              id="location"
              name="location"
              value={location}
            />

            <label>Image URL</label>
            <input
              onChange={changeImageUrl}
              type="text"
              name="imageUrl"
              value={imageUrl}
            />

            <button className="submit">submit</button>
            <button onClick={toggleModal} className="cancel">
              cancel
            </button>
          </form>
        </div>
      )}

      <div className="add-btn">
        <button onClick={toggleModal} className="add-place">
          Add Place
        </button>
      </div>

      <div className="places-list">{placesList}</div>
    </>
  );
}

export default Places;
