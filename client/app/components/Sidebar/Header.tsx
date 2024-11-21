import { HiMenuAlt3 } from "react-icons/hi";

type THeaderProps = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const Header: React.FC<THeaderProps> = ({ open, setOpen }) => {
  return (
    <div className="p-4 border shadow-md">
      <HiMenuAlt3
        size={26}
        className="cursor-pointer"
        onClick={() => setOpen(!open)}
      />
    </div>
  );
};

export default Header;
