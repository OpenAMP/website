import "solid-js";
import { Show, createSignal } from "solid-js";
import { AiOutlineClose, AiOutlineMenu } from "solid-icons/ai";
import { createMediaQuery } from "@solid-primitives/media";

export default function NavLinks({ pages }: { pages: any }) {
  const isMobile = createMediaQuery("(max-width: 1024px)");
  const [isOpen, setIsOpen] = createSignal(false);
  const toggle = () => setIsOpen(!isOpen());
  return (
    <div class="relative">
      <Show
        when={isOpen()}
        fallback={
          <button onClick={toggle} class="lg:hidden">
            <AiOutlineMenu size={30} class="fill-secondary" />
          </button>
        }
      >
        <button onClick={toggle} class="lg:hidden">
          <AiOutlineClose size={30} class="fill-secondary" />
        </button>
      </Show>
      <ul
        class={`
            ${
              isMobile()
                ? isOpen()
                  ? "bg-white text-black absolute p-6 right-0"
                  : "hidden"
                : ""
            }
            font-bold basis-full lg:basis-auto flex flex-col lg:flex-row items-start ml-auto gap-5
        `}
      >
        {pages.map((page: any) => (
          <a
            href={page.url}
            class="uppercase text-xs text-black no-underline p-5 hover:border-b-2 hover:border-[#dc4a4a]"
          >
            {page.label[0].toUpperCase() + page.label.slice(1)}
          </a>
        ))}
      </ul>
    </div>
  );
}
