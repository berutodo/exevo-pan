import cheerio, { Element } from 'cheerio/lib/index'
import { exitIfMaintenance } from 'utils'

export default class KillStatistics {
  maintenanceCheck(content: string): boolean {
    const $ = cheerio.load(content)
    const headingElement = $('h1')
    return headingElement.text() === 'Downtime'
  }

  /* name(element: Element): string {
    return cheerio('td:nth-child(1)', element).text()
  }

  location(element: Element): ServerLocation {
    const locationText = cheerio('td:nth-child(3)', element).text()
    return buildServerLocation(locationText)
  }

  pvpType(element: Element): PvpType {
    const pvpTypeText = cheerio('td:nth-child(4)', element).text()
    return buildPvpType(pvpTypeText)
  }

  battleye(element: Element): boolean {
    const battleyeImageSrc = cheerio('td:nth-child(5) img', element).attr('src')

    if (!battleyeImageSrc) {
      return false
    }

    const BATTLEYE_PROTECTED_URL =
      'https://static.tibia.com/images/global/content/icon_battleyeinitial.gif'

    return battleyeImageSrc === BATTLEYE_PROTECTED_URL
  }

  experimental(element: Element): boolean {
    const serverInfoText = cheerio('td:nth-child(6)', element)
      .text()
      .toLowerCase()

    return serverInfoText.includes('experimental')
  } */

  servers(content: string): string[] {
    exitIfMaintenance(() => this.maintenanceCheck(content))

    const $ = cheerio.load(content)

    const serverOptions = $('select[name="world"] option')
    const serverNames: string[] = []
    serverOptions.each((_, element) => {
      const { value } = element.attribs
      if (value) serverNames.push(value)
    })

    return serverNames
  }
}
