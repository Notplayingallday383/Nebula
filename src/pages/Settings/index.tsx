import TabComponent from "./TabComponent";
import { HeaderRoute } from "../../components/HeaderRoute";
import tabs from "./tabs";
import { Helmet } from "react-helmet"

export function Settings() {
  const getBlank = localStorage.getItem('useBlank')
    if (getBlank === 'true') {
      blankopen()
    }

  function blankopen() {
    const newWindow = window.open('about:blank', '_blank');
    const newDocument = newWindow.document.open();
    newDocument.write(`
      <!DOCTYPE html>
      <html>
        <head>
          <style type="text/css">
            body, html
            {
              margin: 0; padding: 0; height: 100%; overflow: hidden;
            }
          </style>
        </head>
        <body>
          <iframe style="border: none; width: 100%; height: 100vh;" src="/"></iframe>
        </body>
      </html>
    `);
    newDocument.close();
  }

  return (
    <HeaderRoute>
      <Helmet>
        <title>Settingsz</title>
      </Helmet>
      <TabComponent tabs={tabs} />
    </HeaderRoute>
  );
}
