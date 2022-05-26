<!-- fcTemporal -->

# Wrong `dateUntil` when `start_date.day == 29 || 30 || 31` & `end_date.day == 28 || 29 || 30 || 31`


Interactive test https://datediff.netlify.app/
Repo https://github.com/nitin2953/date-diff-test
Issue https://github.com/fullcalendar/temporal/issues/13

---

## STARTING WITH 29
<details>
<summary>Wrong Diff if <code>end_date</code> is <strong>28 Feb (not 29)</strong> (Future Only)</summary>
<br>

| `DD MMM YYYY` | `DD MMM YYYY` | Temporal   | fcTemporal | ⭕ |
|---------------|---------------|------------|------------|----|
| **Past** |
| `29 Jan 2022` | `28 Feb 2020` | `-1Y -11M -01D` | `-1Y -11M -01D` | ✅ |
| `29 Jan 2022` | `29 Feb 2020` | `-1Y -11M  00D` | `-1Y -11M  00D` | ✅ |
| `29 Jan 2022` | `01 Mar 2020` | `-1Y -10M -28D` | `-1Y -10M -28D` | ✅ |
||
| `29 Jan 2022` | `27 Feb 2021` | `0Y -11M -01D` | `0Y -11M -01D` | ✅ |
| `29 Jan 2022` | `28 Feb 2021` | `0Y -11M  00D` | `0Y -11M  00D` | ✅ |
| `29 Jan 2022` | `01 Mar 2021` | `0Y -10M -28D` | `0Y -10M -28D` | ✅ |
||
| **Future** |
| `29 Jan 2022` | `27 Feb 2022` | `0Y 00M 29D` | `0Y 00M 29D` | ✅ |
| `29 Jan 2022` | `28 Feb 2022` | `0Y 01M 00D` | `0Y 00M 30D` | ❌ |
| `29 Jan 2022` | `01 Mar 2022` | `0Y 01M 01D` | `0Y 01M 01D` | ✅ |
||
| `29 Jan 2022` | `27 Feb 2023` | `1Y 00M 29D` | `1Y 00M 29D` | ✅ |
| `29 Jan 2022` | `28 Feb 2023` | `1Y 01M 00D` | `1Y 00M 30D` | ❌ |
| `29 Jan 2022` | `01 Mar 2023` | `1Y 01M 01D` | `1Y 01M 01D` | ✅ |
||
| `29 Jan 2022` | `28 Feb 2024` | `2Y 00M 30D` | `2Y 00M 30D` | ✅ |
| `29 Jan 2022` | `29 Feb 2024` | `2Y 01M 00D` | `2Y 01M 00D` | ✅ |
| `29 Jan 2022` | `01 Mar 2024` | `2Y 01M 01D` | `2Y 01M 01D` | ✅ |
||
| `29 Jan 2022` | `27 Feb 2025` | `3Y 00M 29D` | `3Y 00M 29D` | ✅ |
| `29 Jan 2022` | `28 Feb 2025` | `3Y 01M 00D` | `3Y 00M 30D` | ❌ |
| `29 Jan 2022` | `01 Mar 2025` | `3Y 01M 01D` | `3Y 01M 01D` | ✅ |
</details>


## STARTING WITH 30
<details>
<summary>Wrong Diff if <code>end_date</code> is <strong>28/29 Feb</strong> (Future Only)</summary>
<br>

| `DD MMM YYYY` | `DD MMM YYYY` | Temporal | fcTemporal | ⭕ |
|---------------|---------------|----------|------------|----|
| **Past** |
| `30 Jan 2022` | `28 Feb 2020` | `-1Y -11M -01D` | `-1Y -11M -01D` | ✅ |
| `30 Jan 2022` | `29 Feb 2020` | `-1Y -11M  00D` | `-1Y -11M  00D` | ✅ |
| `30 Jan 2022` | `01 Mar 2020` | `-1Y -10M -29D` | `-1Y -10M -29D` | ✅ |
||
| `30 Jan 2022` | `27 Feb 2021` | `0Y -11M -01D` | `0Y -11M -01D` | ✅ |
| `30 Jan 2022` | `28 Feb 2021` | `0Y -11M  00D` | `0Y -11M  00D` | ✅ |
| `30 Jan 2022` | `01 Mar 2021` | `0Y -10M -29D` | `0Y -10M -29D` | ✅ |
| **Future** |
| `30 Jan 2022` | `27 Feb 2022` | `0Y 0M 28D` | `0Y 0M 28D` | ✅ |
| `30 Jan 2022` | `28 Feb 2022` | `0Y 1M 00D` | `0Y 0M 29D` | ❌ |
| `30 Jan 2022` | `01 Mar 2022` | `0Y 1M 01D` | `0Y 1M 01D` | ✅ |
||
| `30 Jan 2022` | `27 Feb 2023` | `1Y 0M 28D` | `1Y 0M 28D` | ✅ |
| `30 Jan 2022` | `28 Feb 2023` | `1Y 1M 00D` | `1Y 0M 29D` | ❌ |
| `30 Jan 2022` | `01 Mar 2023` | `1Y 1M 01D` | `1Y 1M 01D` | ✅ |
||
| `30 Jan 2022` | `28 Feb 2024` | `2Y 0M 29D` | `2Y 0M 29D` | ✅ |
| `30 Jan 2022` | `29 Feb 2024` | `2Y 1M 00D` | `2Y 0M 30D` | ❌ |
| `30 Jan 2022` | `01 Mar 2024` | `2Y 1M 01D` | `2Y 1M 01D` | ✅ |
||
| `30 Jan 2022` | `27 Feb 2025` | `3Y 0M 28D` | `3Y 0M 28D` | ✅ |
| `30 Jan 2022` | `28 Feb 2025` | `3Y 1M 00D` | `3Y 0M 29D` | ❌ |
| `30 Jan 2022` | `01 Mar 2025` | `3Y 1M 01D` | `3Y 1M 01D` | ✅ |
</details>


## STARTING WITH 31
<details>
<summary>Wrong Diff if <code>total_days</code> & <code>end_date.day</code> is <strong>30</strong> AND at <strong>28/29 Feb</strong> (Future Only)</summary>
<br>

| ℹ | **TD = `total_days` in `end_date.month`** |
|-|-|

| `DD MMM YYYY` | `DD MMM YYYY` | Temporal   | fcTemporal | ⭕ | TD |
|---------------|:-------------:|------------|------------|----|----|
| **Past, All ✅** |
| **Future** |
| `31 Jan 2022` | `28 Feb 2022` | `0Y 01M 0D` | `0Y 0M 28D` | ❌ | **`28`** |
| `31 Jan 2022` | `31 Mar 2022` | `0Y 02M 0D` | `0Y 2M 00D` | ✅ | **`31`** |
| `31 Jan 2022` | `30 Apr 2022` | `0Y 03M 0D` | `0Y 2M 30D` | ❌ | **`30`** |
| `31 Jan 2022` | `31 May 2022` | `0Y 04M 0D` | `0Y 4M 00D` | ✅ | **`31`** |
| `31 Jan 2022` | `30 Jun 2022` | `0Y 05M 0D` | `0Y 4M 30D` | ❌ | **`30`** |
| `31 Jan 2022` | `31 Jul 2022` | `0Y 06M 0D` | `0Y 6M 00D` | ✅ | **`31`** |
| `31 Jan 2022` | `31 Aug 2022` | `0Y 07M 0D` | `0Y 7M 00D` | ✅ | **`31`** |
| `31 Jan 2022` | `30 Sep 2022` | `0Y 08M 0D` | `0Y 7M 30D` | ❌ | **`30`** |
| `31 Jan 2022` | `31 Oct 2022` | `0Y 09M 0D` | `0Y 9M 00D` | ✅ | **`31`** |
| `31 Jan 2022` | `30 Nov 2022` | `0Y 10M 0D` | `0Y 9M 30D` | ❌ | **`30`** |
| `31 Jan 2022` | `31 Dec 2022` | `0Y 11M 0D` | `0Y 11M 0D` | ✅ | **`31`** |
| `31 Jan 2022` | `31 Jan 2023` | `1Y 00M 0D` | `1Y 0M 00D` | ✅ | **`31`** |
| `31 Jan 2022` | `28 Feb 2023` | `1Y 01M 0D` | `1Y 0M 28D` | ❌ | **`28`** |
|               |       …       |
| `31 Jan 2022` | `29 Feb 2024` | `2Y 01M 0D` | `2Y 0M 29D` | ❌ | **`29`** |
</details>







## Others

LEAP YEARS => 2000, 2004, 2008, 2012, 2016, 2020, 2024, 2028, 2032, 2036, 2040, 2044, 2048, 2052, 2056, 2060, 2064, 2068, 2072, 2076, 2080, 2084, 2088, 2092, 2096, 2100.


| Jan |  Feb  | Mar | Apr | May | Jun | Jul | Aug | Sep | Oct | Nov | Dec |
| 31  | 28/29 | 31  | 30  | 31  | 30  | 31  | 31  | 30  | 31  | 30  | 31  |

| `DD MMM YYYY` | `DD MMM YYYY` | Temporal   | fcTemporal | ⭕ |
|---------------|---------------|------------|------------|----|
| `31 May 2003` | `30 Sep 2003` | `0Y 4M 0D` | `0Y 4M 0D` | ✅ |
| `31 May 2003` | `30 Jun 2003` | `0Y 1M 0D` | `0Y 1M 0D` | ✅ |
|               |               |            |            |    |
| `31 May 2003` | `30 Jun 2003` | `0Y 1M 0D` | `0Y 0M 30D` | ❌ |
| `31 May 2003` | `30 Sep 2003` | `0Y 4M 0D` | `0Y 3M 30D` | ❌ |
| `31 May 2003` | `30 Nov 2003` | `0Y 6M 0D` | `0Y 5M 30D` | ❌ |
| `31 May 2003` | `29 Feb 2004` | `0Y 9M 0D` | `0Y 8M 29D` | ❌ |
| `31 May 2003` | `30 Apr 2004` | `0Y 11M 0D` | `0Y 10M 30D` | ❌ |
| `31 May 2003` | `30 Jun 2004` | `1Y 1M 0D` | `1Y 0M 30D` | ❌ |
| `31 May 2003` | `30 Sep 2004` | `1Y 4M 0D` | `1Y 3M 30D` | ❌ |
| `31 May 2003` | `30 Nov 2004` | `1Y 6M 0D` | `1Y 5M 30D` | ❌ |
| `31 May 2003` | `28 Feb 2005` | `1Y 9M 0D` | `1Y 8M 28D` | ❌ |
| `31 May 2003` | `30 Apr 2005` | `1Y 11M 0D` | `1Y 10M 30D` | ❌ |
| `31 May 2003` | `30 Jun 2005` | `2Y 1M 0D` | `2Y 0M 30D` | ❌ |
| `31 May 2003` | `30 Sep 2005` | `2Y 4M 0D` | `2Y 3M 30D` | ❌ |
| `31 May 2003` | `30 Nov 2005` | `2Y 6M 0D` | `2Y 5M 30D` | ❌ |
| `31 May 2003` | `28 Feb 2006` | `2Y 9M 0D` | `2Y 8M 28D` | ❌ |
| `31 May 2003` | `30 Apr 2006` | `2Y 11M 0D` | `2Y 10M 30D` | ❌ |
| `31 May 2003` | `30 Jun 2006` | `3Y 1M 0D` | `3Y 0M 30D` | ❌ |
| `31 May 2003` | `30 Sep 2006` | `3Y 4M 0D` | `3Y 3M 30D` | ❌ |
| `31 May 2003` | `30 Nov 2006` | `3Y 6M 0D` | `3Y 5M 30D` | ❌ |
| `31 May 2003` | `28 Feb 2007` | `3Y 9M 0D` | `3Y 8M 28D` | ❌ |
| `31 May 2003` | `30 Apr 2007` | `3Y 11M 0D` | `3Y 10M 30D` | ❌ |
| `31 May 2003` | `30 Jun 2007` | `4Y 1M 0D` | `4Y 0M 30D` | ❌ |
| `31 May 2003` | `30 Sep 2007` | `4Y 4M 0D` | `4Y 3M 30D` | ❌ |
| `31 May 2003` | `30 Nov 2007` | `4Y 6M 0D` | `4Y 5M 30D` | ❌ |
| `31 May 2003` | `29 Feb 2008` | `4Y 9M 0D` | `4Y 8M 29D` | ❌ |
| `31 May 2003` | `30 Apr 2008` | `4Y 11M 0D` | `4Y 10M 30D` | ❌ |
| `31 May 2003` | `30 Jun 2008` | `5Y 1M 0D` | `5Y 0M 30D` | ❌ |


