import { genres } from "@/data/data";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectValue,
  SelectItem,
  SelectTrigger,
} from "@/components/ui/select";

function GenreSelect({
  onValueChange,
}: {
  onValueChange: (value: string) => void;
}) {
  return (
    <Select onValueChange={onValueChange}>
      <SelectTrigger className="w-[180px] hover:bg-red-700/80 data-[placeholder]:text-white text-white font-semibold text-xl">
        <SelectValue placeholder="Genres" />
      </SelectTrigger>
      <SelectContent className="bg-slate-950 text-white font-semibold">
        <SelectGroup className=" grid grid-cols-3 bg-red-700/80">
          {genres.map((gen) => (
            <SelectItem key={gen.id} value={gen.genre}>
              {gen.genre}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}

export default GenreSelect;
