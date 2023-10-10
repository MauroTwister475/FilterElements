import { ListData } from "./ListProps"

interface ListProps {
  searchText: string,
}

export function ListItems({ searchText }: ListProps) {
  const FilteredList = ListData.filter(item => item.title.toUpperCase().includes(searchText) ||  item.title.toLowerCase().includes(searchText));

  return (
    <div className="w-full grid grid-cols-1 gap-4 xl:g:grid-cols-2 lg:grid-cols-2 ">
      {FilteredList.map(item => (
        <div 
          key={item.title} 
          className="w-full h-auto bg-zinc-800 p-4 rounded-lg text-white transition-all hover:bg-zinc-700 cursor-pointer listItem shadow-lg shadow-emerald-400/10"
        >
        <header className="w-full flex items-center">
          {item.icon}
          <h1 className="text-lg font-semibold">
            {item.title}
          </h1>
        </header>
        <p className="text-justify mt-4 px-2">
          {item.content}
        </p>
      </div>
      ))}
    </div>
  );
}


// FAzer isso com o intuito de evotar ao maximo DERIVATED STATUS ouse ja estatos derivados.