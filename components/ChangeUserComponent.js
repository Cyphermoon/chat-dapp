import { useMoralis } from "react-moralis";

const ChangeUserComponent = () => {
  const { setUserData, isUserUpdating } = useMoralis();

  const setUserName = () => {
    const username = prompt("Enter your new username: ");

    if (!username) return;

    setUserData({
      username,
    });
  };

  return (
    <div className="text-sm absolute top-5 right-5">
      <button
        onClick={setUserName}
        disabled={isUserUpdating}
        className="text-black hover:focus:active:text-pink-600 bg-yellow-600 rounded-sm p-2"
      >
        Change username
      </button>
    </div>
  );
};

export default ChangeUserComponent;
