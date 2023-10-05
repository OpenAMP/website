import "solid-js";
import { createEffect } from "solid-js";
import { Show, createSignal } from "solid-js";
import { AiOutlineClose, AiOutlineMenu } from "solid-icons/ai";
import { createMediaQuery } from "@solid-primitives/media";

export default function NavLinks({ pages }: { pages: any }) {
  const isMobile = createMediaQuery("(max-width: 1024px)");
  const [isOpen, setIsOpen] = createSignal(false);
  const [selectedPage, setSelectedPage] = createSignal("");
  const toggle = () => setIsOpen(!isOpen());

  createEffect(() => {
    if (isOpen()) {
      setSelectedPage("");
    }
  });

  return (
    <div class="relative ">
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
                  ? "bg-white text-[#575757] absolute p-6 right-0"
                  : "hidden"
                : ""
            }
            font-bold basis-full lg:basis-auto flex flex-col lg:flex-row items-start ml-auto gap-5
        `}
      >
        <Show when={!isOpen()}>
          {pages.map((page: any) => (
            <div
              class="mb-4"
              onClick={() => setSelectedPage(page.label.toLowerCase())}
            >
              <a
                href={page.url}
                class={`uppercase text-xs text-[#575757] no-underline p-5 ${
                  selectedPage() === page.label.toLowerCase()
                    ? "border-b-2 border-[#dc4a4a]"
                    : "hover:border-b-4 hover:border-[#dc4a4a] transition ease-in-out delay-300"
                }`}
              >
                {page.label[0].toUpperCase() + page.label.slice(1)}
              </a>
            </div>
          ))}
        </Show>
      </ul>
    </div>
  );
}
