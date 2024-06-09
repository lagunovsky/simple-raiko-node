# Simple raiko node

This project includes a set of scripts and configurations to set up and manage a [Raiko][raiko] instance.

Prerequisites can be found in the [README_Docker_and_RA.md][raiko-readme-docker-and-ra].

## Setup

#### 1. Subscribing to Intel PCS Service

To use ECDSA Attestation, you need to subscribe to the [Intel PCS service][intel-pcs-service], following the steps
in [Intel's how-to guide][intel-dcap-install-howto]. After subscribing to the service, you will receive two keys: a
primary API key and a secondary API key.

#### 2. Clone the repository

```bash
git clone https://github.com/lagunovsky/simple-raiko-node
```

#### 3. Run the setup script

```bash
cd simple-raiko-node
./manage setup
```

- You may have to log in again. If this happens, just run the command again.
- PCCS password can be left empty if you do not have one.

### Non-interactive setup

```bash
HISTIGNORE="manage setup" \
DEBIAN_FRONTEND=noninteractive \
INTEL_API_KEY= \
PRIVATE_KEY= \
./manage setup
```

<details>
<summary>Available variables</summary>

| Variable                | Optional | Available Value              | Default                                                          |
|-------------------------|----------|------------------------------|------------------------------------------------------------------|
| INTEL_API_KEY           | No       |                              |                                                                  |
| PRIVATE_KEY             | No       |                              |                                                                  |
| SRN_RAIKO_IMAGE         | Yes      |                              | `raiko`                                                          |
| SRN_PCCS_IMAGE          | Yes      |                              | `pccs`                                                           |
| SRN_IMAGES_TAG          | Yes      |                              | `latest`                                                         |
| SRN_RAIKO_PORT          | Yes      |                              | `8080`                                                           |
| SPECIFY_NETWORK         | Yes      | `Y` / `N`                    | `Y`                                                              |
| SRN_L1_NETWORK          | Yes      | `holesky` / `ethereum`       | `holesky`                                                        |
| SRN_NETWORK             | Yes      | `taiko_a7` / `taiko_mainnet` | `taiko_a7`                                                       |
| SRN_ETHEREUM_RPC        | Yes      |                              |                                                                  |
| SRN_ETHEREUM_BEACON_RPC | Yes      |                              |                                                                  |
| SRN_HOLESKY_RPC         | Yes      |                              |                                                                  |
| SRN_HOLESKY_BEACON_RPC  | Yes      |                              |                                                                  |
| SRN_TAIKO_MAINNET_RPC   | Yes      |                              |                                                                  |
| SRN_TAIKO_A7_RPC        | Yes      |                              |                                                                  |
| COLLECT_METRICS         | Yes      | `Y` / `N`                    | `Y`                                                              |
| SRN_PROMETHEUS_PORT     | Yes      |                              | `9090`                                                           |
| SRN_GRAFANA_PORT        | Yes      |                              | `3000`                                                           |
| REGISTER_AGAIN          | Yes      | `Y` / `N`                    | `N`                                                              |
| BUILD_AGAIN             | Yes      | `Y` / `N`                    | `N`                                                              |
| PULL_AGAIN              | Yes      | `Y` / `N`                    | `N`                                                              |
| L1_RPC                  | Yes      |                              | `https://rpc.ankr.com/eth[_holesky]` (depends on SRN_L1_NETWORK) |
| GAS_PRICE               | Yes      |                              |                                                                  |

</details>

## Switching to simple-raiko-node

If Raiko is already installed by instructions from the [README_Docker_and_RA.md][raiko-readme-docker-and-ra], all you
need is to stop the running raiko instance by `docker compose down`.

## Available commands

- `./manage setup`     - prepare, check, configure, and register in one command
- `./manage prepare`   - install dependencies
- `./manage check`     - check FMSPC
- `./manage configure` - generate configuration files (.env, certificates, etc.)
- `./manage register`  - register your node onchain (can be used for re-registration)
- `./manage verify`    - verify that your raiko instance is running properly
- `./manage reset`     - removes all user data and restores the source code to its original state

[raiko]: https://github.com/taikoxyz/raiko

[raiko-readme-docker-and-ra]: https://github.com/taikoxyz/raiko/blob/main/docs/README_Docker_and_RA.md

[intel-dcap-install-howto]: https://www.intel.com/content/www/us/en/developer/articles/guide/intel-software-guard-extensions-data-center-attestation-primitives-quick-install-guide.html

[intel-pcs-service]: https://api.portal.trustedservices.intel.com/products#product=liv-intel-software-guard-extensions-provisioning-certification-service
