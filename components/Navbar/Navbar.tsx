"use client";

import React, { useState } from "react";
import Link from "next/link";

// Import dari HeroUI
import {
  Navbar as Navbars,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Badge,
} from "@heroui/react";

// Import ikon dari react-icons
import { BsCart2, BsHeart } from "react-icons/bs";
import { AiOutlineUser } from "react-icons/ai";

export const ThriftNThriveLogo = (props: { width: string; height: string }) => {
  return (
    <svg
      width={props.width}
      height={props.height}
      viewBox="0 0 851 851"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M579.075 268.875C573.763 258.373 570.996 246.769 571 235C571 194.813 602.25 166.25 646 160C697.025 152.712 718.912 124.588 733.5 110C777.25 272.5 696 310 646 310C632.835 310.003 619.902 306.541 608.5 299.963"
        stroke="#497D74"
        strokeWidth="33"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M521 335C527.25 297.5 551.725 274.2 608.5 260C648.713 249.95 676.788 224.75 696 198.187"
        stroke="#497D74"
        strokeWidth="33"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <mask
        id="path-3-outside-1_689_94"
        maskUnits="userSpaceOnUse"
        x="200"
        y="544"
        width="375"
        height="195"
        fill="black"
      >
        <rect fill="white" x="200" y="544" width="375" height="195" />
        <path d="M321.5 583V590.5H269V728H261.5V590.5H209V583H321.5ZM354.309 560.5L425.059 693.75C433.392 679.917 437.559 663.5 437.559 644.5H445.059C445.059 667.833 439.892 687.083 429.559 702.25L443.309 728H434.809L424.559 708.5C412.225 722.333 396.392 729.25 377.059 729.25C363.725 729.25 352.059 724.167 342.059 714C332.059 703.667 327.059 689.667 327.059 672C327.059 658.167 331.475 646.667 340.309 637.5C349.142 628.333 361.559 622.667 377.559 620.5L341.809 553H437.559V560.5H354.309ZM420.309 700.75L381.559 627.75C367.559 629.583 356.225 634.583 347.559 642.75C338.892 650.917 334.559 660.667 334.559 672C334.559 686.167 338.892 698 347.559 707.5C356.225 717 366.059 721.75 377.059 721.75C394.725 721.75 409.142 714.75 420.309 700.75ZM565.543 583V590.5H513.043V728H505.543V590.5H453.043V583H565.543Z" />
      </mask>
      <path
        d="M321.5 583V590.5H269V728H261.5V590.5H209V583H321.5ZM354.309 560.5L425.059 693.75C433.392 679.917 437.559 663.5 437.559 644.5H445.059C445.059 667.833 439.892 687.083 429.559 702.25L443.309 728H434.809L424.559 708.5C412.225 722.333 396.392 729.25 377.059 729.25C363.725 729.25 352.059 724.167 342.059 714C332.059 703.667 327.059 689.667 327.059 672C327.059 658.167 331.475 646.667 340.309 637.5C349.142 628.333 361.559 622.667 377.559 620.5L341.809 553H437.559V560.5H354.309ZM420.309 700.75L381.559 627.75C367.559 629.583 356.225 634.583 347.559 642.75C338.892 650.917 334.559 660.667 334.559 672C334.559 686.167 338.892 698 347.559 707.5C356.225 717 366.059 721.75 377.059 721.75C394.725 721.75 409.142 714.75 420.309 700.75ZM565.543 583V590.5H513.043V728H505.543V590.5H453.043V583H565.543Z"
        fill="black"
      />
      <path
        d="M321.5 583H330.5V574H321.5V583ZM321.5 590.5V599.5H330.5V590.5H321.5ZM269 590.5V581.5H260V590.5H269ZM269 728V737H278V728H269ZM261.5 728H252.5V737H261.5V728ZM261.5 590.5H270.5V581.5H261.5V590.5ZM209 590.5H200V599.5H209V590.5ZM209 583V574H200V583H209ZM312.5 583V590.5H330.5V583H312.5ZM321.5 581.5H269V599.5H321.5V581.5ZM260 590.5V728H278V590.5H260ZM269 719H261.5V737H269V719ZM270.5 728V590.5H252.5V728H270.5ZM261.5 581.5H209V599.5H261.5V581.5ZM218 590.5V583H200V590.5H218ZM209 592H321.5V574H209V592ZM354.309 560.5V551.5H339.34L346.36 564.721L354.309 560.5ZM425.059 693.75L417.11 697.971L424.565 712.011L432.768 698.394L425.059 693.75ZM437.559 644.5V635.5H428.559V644.5H437.559ZM445.059 644.5H454.059V635.5H445.059V644.5ZM429.559 702.25L422.121 697.183L419.054 701.684L421.62 706.489L429.559 702.25ZM443.309 728V737H458.317L451.248 723.761L443.309 728ZM434.809 728L426.842 732.188L429.372 737H434.809V728ZM424.559 708.5L432.525 704.312L426.483 692.818L417.841 702.511L424.559 708.5ZM342.059 714L335.591 720.259L335.617 720.285L335.642 720.311L342.059 714ZM377.559 620.5L378.766 629.419L391.55 627.688L385.512 616.288L377.559 620.5ZM341.809 553V544H326.858L333.855 557.212L341.809 553ZM437.559 553H446.559V544H437.559V553ZM437.559 560.5V569.5H446.559V560.5H437.559ZM420.309 700.75L427.345 706.362L431.027 701.746L428.258 696.53L420.309 700.75ZM381.559 627.75L389.508 623.53L386.581 618.015L380.39 618.826L381.559 627.75ZM347.559 707.5L340.91 713.566L340.91 713.566L347.559 707.5ZM346.36 564.721L417.11 697.971L433.008 689.529L362.258 556.279L346.36 564.721ZM432.768 698.394C442.085 682.928 446.559 664.845 446.559 644.5H428.559C428.559 662.155 424.699 676.905 417.349 689.106L432.768 698.394ZM437.559 653.5H445.059V635.5H437.559V653.5ZM436.059 644.5C436.059 666.515 431.192 683.869 422.121 697.183L436.996 707.317C448.592 690.298 454.059 669.151 454.059 644.5H436.059ZM421.62 706.489L435.37 732.239L451.248 723.761L437.498 698.011L421.62 706.489ZM443.309 719H434.809V737H443.309V719ZM442.775 723.812L432.525 704.312L416.592 712.688L426.842 732.188L442.775 723.812ZM417.841 702.511C407.297 714.337 393.952 720.25 377.059 720.25V738.25C398.832 738.25 417.153 730.33 431.276 714.489L417.841 702.511ZM377.059 720.25C366.318 720.25 356.914 716.268 348.475 707.689L335.642 720.311C347.204 732.065 361.132 738.25 377.059 738.25V720.25ZM348.526 707.741C340.505 699.452 336.059 687.895 336.059 672H318.059C318.059 691.438 323.613 707.881 335.591 720.259L348.526 707.741ZM336.059 672C336.059 660.275 339.72 651.082 346.789 643.745L333.828 631.255C323.231 642.252 318.059 656.059 318.059 672H336.059ZM346.789 643.745C353.875 636.392 364.227 631.387 378.766 629.419L376.351 611.581C358.89 613.946 344.409 620.275 333.828 631.255L346.789 643.745ZM385.512 616.288L349.762 548.788L333.855 557.212L369.605 624.712L385.512 616.288ZM341.809 562H437.559V544H341.809V562ZM428.559 553V560.5H446.559V553H428.559ZM437.559 551.5H354.309V569.5H437.559V551.5ZM428.258 696.53L389.508 623.53L373.609 631.97L412.359 704.97L428.258 696.53ZM380.39 618.826C364.872 620.858 351.671 626.508 341.386 636.2L353.731 649.3C360.779 642.658 370.245 638.308 382.727 636.674L380.39 618.826ZM341.386 636.2C331.018 645.97 325.559 658.049 325.559 672H343.559C343.559 663.284 346.766 655.863 353.731 649.3L341.386 636.2ZM325.559 672C325.559 688.164 330.572 702.234 340.91 713.566L354.207 701.434C347.212 693.766 343.559 684.169 343.559 672H325.559ZM340.91 713.566C350.966 724.589 363.095 730.75 377.059 730.75V712.75C369.022 712.75 361.485 709.411 354.207 701.434L340.91 713.566ZM377.059 730.75C397.507 730.75 414.497 722.469 427.345 706.362L413.273 695.138C403.786 707.031 391.943 712.75 377.059 712.75V730.75ZM565.543 583H574.543V574H565.543V583ZM565.543 590.5V599.5H574.543V590.5H565.543ZM513.043 590.5V581.5H504.043V590.5H513.043ZM513.043 728V737H522.043V728H513.043ZM505.543 728H496.543V737H505.543V728ZM505.543 590.5H514.543V581.5H505.543V590.5ZM453.043 590.5H444.043V599.5H453.043V590.5ZM453.043 583V574H444.043V583H453.043ZM556.543 583V590.5H574.543V583H556.543ZM565.543 581.5H513.043V599.5H565.543V581.5ZM504.043 590.5V728H522.043V590.5H504.043ZM513.043 719H505.543V737H513.043V719ZM514.543 728V590.5H496.543V728H514.543ZM505.543 581.5H453.043V599.5H505.543V581.5ZM462.043 590.5V583H444.043V590.5H462.043ZM453.043 592H565.543V574H453.043V592Z"
        fill="black"
        mask="url(#path-3-outside-1_689_94)"
      />
      <path
        d="M395.061 102.345C386.519 102.345 378.186 104.998 371.212 109.939C364.238 114.881 358.965 121.867 356.121 129.936C354.165 134.934 350.346 138.974 345.472 141.203C340.597 143.432 335.048 143.675 329.998 141.881C324.947 140.087 320.791 136.397 318.407 131.59C316.023 126.783 315.598 121.235 317.221 116.12C321.422 104.236 328.278 93.4703 337.266 84.6458C346.254 75.8214 357.137 69.1714 369.083 65.2038C381.029 61.2362 393.722 60.0559 406.193 61.7531C418.664 63.4504 430.583 67.9802 441.039 74.9966C451.495 82.0131 460.212 91.3305 466.525 102.237C472.837 113.144 476.577 125.352 477.46 137.928C478.343 150.504 476.345 163.116 471.618 174.8C466.892 186.484 459.562 196.932 450.189 205.345L448.496 206.876C439.411 215.025 431.194 222.347 424.958 230.289C418.351 238.479 415.75 245.139 415.75 251.096C415.75 260.155 420.705 268.469 428.675 272.771L649.434 391.904C662.33 398.887 672.534 409.977 678.431 423.421C684.329 436.865 685.584 451.895 681.997 466.133C678.41 480.372 670.187 493.006 658.628 502.037C647.069 511.069 632.834 515.982 618.174 516H171.865C157.194 516 142.943 511.094 131.372 502.058C119.801 493.023 111.572 480.377 107.992 466.124C104.411 451.872 105.683 436.831 111.606 423.385C117.529 409.94 127.764 398.86 140.688 391.904L323.333 293.454C328.133 291.049 333.68 290.612 338.797 292.234C343.914 293.856 348.2 297.411 350.745 302.145C353.29 306.878 353.895 312.419 352.432 317.591C350.969 322.764 347.552 327.163 342.906 329.855L160.22 428.305C155.379 430.892 151.541 435.027 149.319 440.052C147.096 445.076 146.616 450.702 147.956 456.032C149.296 461.361 152.377 466.089 156.711 469.46C161.044 472.832 166.379 474.653 171.865 474.635H618.257C623.725 474.616 629.031 472.775 633.338 469.401C637.645 466.027 640.707 461.312 642.042 456C643.377 450.689 642.909 445.084 640.71 440.069C638.512 435.054 634.709 430.915 629.902 428.305L409.101 309.173C398.637 303.515 389.892 295.133 383.787 284.911C377.682 274.69 374.444 263.007 374.414 251.096C374.414 231.985 383.168 216.39 392.583 204.518C401.173 193.722 411.909 184.125 420.416 176.514L422.646 174.528C428.877 168.939 433.268 161.586 435.235 153.442C437.203 145.298 436.655 136.748 433.665 128.922C430.675 121.097 425.382 114.366 418.489 109.62C411.595 104.874 403.426 102.338 395.061 102.345Z"
        fill="black"
      />
    </svg>
  );
};

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    {
      item: "Man",
      href: "/product",
    },
    {
      item: "Woman",
      href: "/product",
    },
    {
      item: "Kids",
      href: "/product",
    },
    {
      item: "Sale",
      href: "/product",
    },
    {
      item: "New Arrivals",
      href: "/product",
    },
    {
      item: "Clothing Brands",
      href: "/product",
    },
    {
      item: "Shoes",
      href: "/product",
    },
    {
      item: "Bags",
      href: "/product",
    },
    {
      item: "Accessories",
      href: "/product",
    },
    {
      item: "My Profile",
      href: "/profile",
    },
    {
      item: "Logout",
      href: "#",
    },
  ];

  return (
    <Navbars
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
      className="px-4"
    >
      <NavbarContent className="hidden sm:flex gap-8">
        {[
          { label: "Man", href: "/product" },
          { label: "Woman", href: "/product" },
          { label: "Kids", href: "/product" },
          {
            label: "Sale",
            href: "/product",
            className: "font-semibold text-danger",
          },
        ].map((item, index) => (
          <NavbarItem key={index}>
            <Link
              className={`text-sm ${item.className || ""}`}
              color="foreground"
              href={item.href}
            >
              {item.label}
            </Link>
          </NavbarItem>
        ))}
      </NavbarContent>

      <NavbarContent className="flex gap-2 sm:gap-4">
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavbarBrand className="flex justify-center items-center">
          <Link href="/" onClick={() => setIsMenuOpen(false)} className="text-black" >
            <ThriftNThriveLogo width="50" height="50" />
          </Link>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent justify="end" className="ml-auto flex gap-8 sm:mt-2">
        <NavbarItem className="cursor-pointer hidden lg:flex">
          <Link href="/profile" onClick={() => setIsMenuOpen(false)}>
            <AiOutlineUser className="text-neutral-800" fontSize={22} />
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link
            href="/wishlist"
            className="cursor-pointer lg:flex"
            onClick={() => setIsMenuOpen(false)}
          >
            <Badge color="danger" content="0">
              <BsHeart className="text-neutral-800" fontSize={18} />
            </Badge>
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link
            href="/mycart"
            className="cursor-pointer lg:flex"
            onClick={() => setIsMenuOpen(false)}
          >
            <Badge color="danger" content="3">
              <BsCart2 className="text-neutral-800" fontSize={20} />
            </Badge>
          </Link>
        </NavbarItem>
      </NavbarContent>

      <NavbarMenu>
        {menuItems.map((e, index) => (
          <NavbarMenuItem key={`${e}-${index}`}>
            <Link
              className={`w-full ${index === 3 && "text-red-500 font-bold"} ${
                index === 10 && "text-red-500"
              }`}
              href={e.href}
              onClick={() => setIsMenuOpen(false)}
            >
              {e.item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbars>
  );
}
