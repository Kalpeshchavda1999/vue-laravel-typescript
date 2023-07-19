export const themeSetup = (appTheme : string) => {
    const body = document.querySelector('body');
    const html = document.querySelector('html');

    if (appTheme === 'dark' && body?.classList.contains('app-theme')) {
        body?.classList.add('bg-dark');
        html?.classList.add("dark");
    } else {
        body?.classList.add('bg-light');
        html?.classList.remove("dark");
    }

};
