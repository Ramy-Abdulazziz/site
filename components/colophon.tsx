import ThemeToggle from "@/components/theme-toggle";

export default function Colophon() {
    return (
        <footer className="colophon">
            <div className="page-frame">
                <p>{"But I've always believed that everyone has their own pace for growth. Taking the long way isn't always bad in life."}</p>
                <ThemeToggle />
            </div>
        </footer>
    );
}
