export type MenuItem = {
    path: string;
    icon?: Element;
    name: string;
    submenu?: { path: string; icon?: Element; name: string; }[];
  };