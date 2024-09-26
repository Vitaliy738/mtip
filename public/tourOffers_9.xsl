<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
    <xsl:output method="html" indent="yes"/>

    <!-- Головний шаблон -->
    <xsl:template match="/tourOffers">
        <html>
            <body>
                <h2>Гарячі туристичні пропозиції</h2>
                <table border="1">
                    <tr bgcolor="#9acd32">
                        <th>Країна</th>
                        <th>Тип туру</th>
                        <th>Опис</th>
                        <th>Вартість</th>
                        <th>Кількість</th>
                    </tr>

                    <!-- Вибір гарячих турів та сортування за вартістю -->
                    <xsl:for-each select="offer[hotTour='true']">
                        <xsl:sort select="price" data-type="number" order="ascending"/>
                        <tr>
                            <td><xsl:value-of select="country"/></td>
                            <td><xsl:value-of select="tourType"/></td>
                            <td><xsl:value-of select="description"/></td>
                            <td><xsl:value-of select="hotTour"/></td>
                            <td><xsl:value-of select="price"/></td>
                            <td><xsl:value-of select="quantity"/></td>
                        </tr>
                    </xsl:for-each>
                </table>
            </body>
        </html>
    </xsl:template>
</xsl:stylesheet>
