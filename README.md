# food-japan

A program to download all CSV open data published on the [Food Sanitation Open](https://ifas.mhlw.go.jp/faspub/_link.do) of the Ministry of Health, Labor and Welfare, and an open data sample application.

## Sample Application

- [Fukui Restaurant Map](https://code4fukui.github.io/food-japan/sample/restaurant-fukui.html)

## Requirements

None.

## Usage

1. Clone the repository: `git clone https://github.com/code4fukui/food-japan.git`
2. Change to the `deno` directory: `cd food-japan/deno`
3. Run the download script: `deno run -A download.js`

The data will be downloaded to the `../data/latest` and `../data/[YYYYMM]` directories.

## Data / API

This project uses the open data published on the [Food Sanitation Open](https://ifas.mhlw.go.jp/faspub/_link.do) website of the Ministry of Health, Labor and Welfare.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.