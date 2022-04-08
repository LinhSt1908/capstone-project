export const AddGuestListItem = ({ addGuest }) => {
  return (
    <>
      {addGuest.map((addGuestItem) => (
        <li key={addGuestItem.index}>{addGuestItem.newAddGuestItem}</li>
      ))}
    </>
  );
};
