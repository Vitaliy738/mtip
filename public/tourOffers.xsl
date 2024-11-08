<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
    <xsl:output method="html" encoding="UTF-8" indent="yes"/>

    <xsl:template match="/">
        <table border="1" cellpadding="10" style="width: 100%; border-collapse: collapse;">
            <tr>
                <th>ID</th>
                <th>Country</th>
                <th>Type</th>
                <th>Description</th>
                <th>Hot Tour</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Season</th>
                <th>Agency</th>
            </tr>
            <xsl:for-each select="tourOffers/tour">
                <tr>
                    <td><xsl:value-of select="id"/></td>
                    <td><xsl:value-of select="country"/></td>
                    <td><xsl:value-of select="type"/></td>
                    <td><xsl:value-of select="description"/></td>
                    <td><xsl:choose>
                        <xsl:when test="hotTour='true'">Yes</xsl:when>
                        <xsl:otherwise>No</xsl:otherwise>
                    </xsl:choose></td>
                    <td>
                        <xsl:value-of select="price"/>
                        <xsl:text> </xsl:text>
                        <xsl:value-of select="price/@currency"/>
                    </td>
                    <td><xsl:value-of select="quantity"/></td>
                    <td><xsl:value-of select="season"/></td>
                    <td><xsl:value-of select="agency"/></td>
                </tr>
            </xsl:for-each>
        </table>
    </xsl:template>
</xsl:stylesheet>
