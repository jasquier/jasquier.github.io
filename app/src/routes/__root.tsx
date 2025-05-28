import { createRootRoute, Outlet } from "@tanstack/react-router";
import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";

export const Route = createRootRoute({
  component: () => (
    <>
      <SidebarProvider>
        <AppSidebar />
        <main className="w-full">
          <Outlet />
          <TanStackRouterDevtools position="bottom-right" />
        </main>
      </SidebarProvider>
    </>
  ),
});
