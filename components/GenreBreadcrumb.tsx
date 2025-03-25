import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

function GenreBreadcrumb({
  onClick,
  movieType,
  selectedGenre,
}: {
  onClick: () => void
  movieType: string;
  selectedGenre: string | null;
}) {
  return (
    <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbPage onClick={onClick} className=" cursor-pointer text-white font-semibold text-3xl">{movieType}</BreadcrumbPage>
        </BreadcrumbItem>
        <BreadcrumbSeparator className=" text-white font-bold" />
        <BreadcrumbPage className=" text-white font-semibold text-2xl">{selectedGenre}</BreadcrumbPage>
      </BreadcrumbList>
    </Breadcrumb>
  );
}

export default GenreBreadcrumb;
