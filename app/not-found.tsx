import Shell from "@/components/shell";

export default function NotFound() {
    return (
        <Shell>
            <article className="page-frame not-found">
                <p className="not-found-rule">
                    <span className="not-found-nuqta" aria-hidden="true" />
                </p>
                <h1>nothing written here yet</h1>
                <p className="not-found-ar" lang="ar" dir="rtl">
                    لم يُكتب هنا شيء بعد
                </p>
                <a className="not-found-home" href="/">
                    home
                </a>
            </article>
        </Shell>
    );
}
