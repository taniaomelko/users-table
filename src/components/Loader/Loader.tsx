import { LoaderIcon } from "../icons";

export const Loader: React.FC = () => {
  return (
    <div className="py-10 text-cyan text-center">
      <LoaderIcon className="inline-block animate-spin" />
    </div>
  );
}
