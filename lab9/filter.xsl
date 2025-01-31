<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
                version="1.0">
    <xsl:output method="xml" indent="yes"/>
    <xsl:template match="/subscriptions">
        <subscriptions>
            <xsl:for-each select="publication[frequency='Щомісячно']">
                <xsl:copy-of select="."/>
            </xsl:for-each>
        </subscriptions>
    </xsl:template>
</xsl:stylesheet>
