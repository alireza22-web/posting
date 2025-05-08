import "./globals.css";

export const metadata = {
  title: "مقالات و پست | علیرضا خوندابی",
  description: "مقالات و پست | علیرضا خوندابی",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fa" dir="rtl">
      <body className="dark:bg-gray-800">
        {children}
      </body>
    </html>
  );
}
