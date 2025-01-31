<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
                version="1.0">
    <xsl:output method="xml" indent="yes"/>
    <xsl:key name="subscriptionIndex" match="publication" use="subscription_index"/>
    <xsl:template match="/subscriptions">
        <subscriptions>
            <xsl:for-each select="publication">
                <xsl:sort select="price" data-type="number" order="ascending"/>
                <xsl:copy-of select="."/>
            </xsl:for-each>
        </subscriptions>
    </xsl:template>
</xsl:stylesheet>
