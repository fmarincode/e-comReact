-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema ecosport_db
-- -----------------------------------------------------
-- -----------------------------------------------------
-- Schema ecosport_db
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema ecosport_db
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `ecosport_db` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci ;
USE `ecosport_db` ;

-- -----------------------------------------------------
-- Table `ecosport_db`.`account`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `ecosport_db`.`account` (
  `idaccount` INT NOT NULL,
  `email` VARCHAR(255) NOT NULL,
  `pwd` VARCHAR(100) NOT NULL,
  PRIMARY KEY (`idaccount`),
  UNIQUE INDEX `email_UNIQUE` (`email` ASC) VISIBLE)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `ecosport_db`.`product`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `ecosport_db`.`product` (
  `idproduct` INT NOT NULL,
  `product_name` VARCHAR(100) NOT NULL,
  `product_type` VARCHAR(100) NOT NULL,
  `product_price` VARCHAR(100) NOT NULL,
  `product_img` VARCHAR(255) NULL,
  `product_genre` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`idproduct`))
ENGINE = InnoDB;

INSERT INTO product (idproduct, product_name, product_type, product_price, product_img, product_genre)
 VALUES
 (1, 'Clifton 9', 'Route', 150, "https://dms.deckers.com/hoka/image/upload/f_auto,q_auto,dpr_auto/b_rgb:f7f7f9/w_1110/v1677006261/HOKA%20Seasonal/SS23%20Photos/1127895-EPFR_1.png?_s=RAABAB0", "Homme"),
 (2, 'Clifton 9 GORE-TEX', 'Route, Marche', 170, "https://dms.deckers.com/hoka/image/upload/f_auto,q_auto,dpr_auto/b_rgb:f7f7f9/w_1110/v1689108991/1141470-BBLC_1.png?_s=RAABAB0", "Homme"),
 (3, 'Ironman Mach X', 'Route, Compétition', 180, "https://dms.deckers.com/hoka/image/upload/f_auto,q_auto,dpr_auto/b_rgb:f7f7f9/w_1110/v1694693211/EMEA/1154515-ABSSP_1.png?_s=RAABAB0", "Homme"),
 (4, 'Carbon X 3', 'Route, Compétition', 180, "https://dms.deckers.com/hoka/image/upload/f_auto,q_auto,dpr_auto/b_rgb:f7f7f9/w_1110/v1664363027/catalog/images/transparent/1123192-BSEP_1.png?_s=RAABAB0", "Homme"),
 (5, 'Arahi 6', 'Route, Marche', 150, "https://dms.deckers.com/hoka/image/upload/f_auto,q_auto,dpr_auto/b_rgb:f7f7f9/w_1110/v1683587929/1123194-BKSV_1.png?_s=RAABAB0", "Homme"),
 (6, 'Rincon 3', 'Route, Compétition', 130, "https://dms.deckers.com/hoka/image/upload/f_auto,q_auto,dpr_auto/b_rgb:f7f7f9/w_1110/v1683587568/1119395-BDDV_1.png?_s=RAABAB0", "Homme"),
 (7, 'Solimar', 'Route, Fitness', 120, "https://dms.deckers.com/hoka/image/upload/f_auto,q_auto,dpr_auto/b_rgb:f7f7f9/w_1110/v1674299225/catalog/images/transparent/1123074-BCBT_1.png?_s=RAABAB0", "Homme"),
 (8, 'Clifton 9', 'Route', 150, "https://dms.deckers.com/hoka/image/upload/f_auto,q_auto,dpr_auto/b_rgb:f7f7f9/w_1110/v1674731445/catalog/images/transparent/1127896-CSLC_1.png?_s=RAABAB0", "Femme"),
 (9, 'Clifton 9 GORE-TEX', 'Route, Marche', 170, "https://dms.deckers.com/hoka/image/upload/f_auto,q_auto,dpr_auto/b_rgb:f7f7f9/w_1110/v1689108991/1141470-BBLC_1.png?_s=RAABAB0", "Femme"),
 (10, 'Ironman Mach X', 'Route, Compétition', 180, "https://dms.deckers.com/hoka/image/upload/f_auto,q_auto,dpr_auto/b_rgb:f7f7f9/w_1110/v1694693211/EMEA/1154515-ABSSP_1.png?_s=RAABAB0", "Femme"),
 (11, 'Gaviota 5', 'Route, Marche', 170, "https://dms.deckers.com/hoka/image/upload/f_auto,q_auto,dpr_auto/b_rgb:f7f7f9/w_1110/v1686760013/1134235-CGSO_1.png?_s=RAABAB0", "Femme"),
 (12, 'Mach X', 'Route, Compétition', 180, "https://dms.deckers.com/hoka/image/upload/f_auto,q_auto,dpr_auto/b_rgb:f7f7f9/w_1110/v1684793099/1141451-LGSO_1.png?_s=RAABAB0", "Femme"),
 (13, 'Challenger 7', 'Route, Trail', 150, "https://dms.deckers.com/hoka/image/upload/f_auto,q_auto,dpr_auto/b_rgb:f7f7f9/w_1110/v1683833228/1134498-MNSK_1.png?_s=RAABAB0", "Femme"),
 (14, 'Mach 5', 'Route, Compétition', 160, "https://dms.deckers.com/hoka/image/upload/f_auto,q_auto,dpr_auto/b_rgb:f7f7f9/w_1110/v1676587720/HOKA%20Seasonal/SS23%20Photos/1127894-ICYC_1.png?_s=RAABAB0", "Femme"),
 (15, 'Clifton 9', 'Route', 100, "https://dms.deckers.com/hoka/image/upload/f_auto,q_auto,dpr_auto/b_rgb:f7f7f9/w_1110/v1681488545/1131170-CSAA_1.png?_s=RAABAB0", "Enfant"),
 (16, 'Anacapa 2 Low GORE-TEX', 'Randonnée', 140, "https://dms.deckers.com/hoka/image/upload/f_auto,q_auto,dpr_auto/b_rgb:f7f7f9/w_1110/v1684886579/1141630-DVOR_1.png?_s=RAABAB0", "Enfant"),
 (17, 'Speedgoat 5', 'Trail, Randonnée', 110, "https://dms.deckers.com/hoka/image/upload/f_auto,q_auto,dpr_auto/b_rgb:f7f7f9/w_1110/v1684340049/1134470-OMLM_1.png?_s=RAABAB0", "Enfant"),
 (18, 'Ora Recovery Slide 3', 'Récupération', 50, "https://dms.deckers.com/hoka/image/upload/f_auto,q_auto,dpr_auto/b_rgb:f7f7f9/w_1110/v1681488816/1134471-CSVO_1.png?_s=RAABAB0", "Enfant");

-- -----------------------------------------------------
-- Table `ecosport_db`.`product_has_account`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `ecosport_db`.`product_has_account` (
  `product_idproduct` INT NOT NULL,
  `account_idaccount` INT NOT NULL,
  `buying_date` DATETIME NULL,
  PRIMARY KEY (`product_idproduct`, `account_idaccount`),
  INDEX `fk_product_has_account_account1_idx` (`account_idaccount` ASC) VISIBLE,
  INDEX `fk_product_has_account_product_idx` (`product_idproduct` ASC) VISIBLE,
  CONSTRAINT `fk_product_has_account_product`
    FOREIGN KEY (`product_idproduct`)
    REFERENCES `ecosport_db`.`product` (`idproduct`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_product_has_account_account1`
    FOREIGN KEY (`account_idaccount`)
    REFERENCES `ecosport_db`.`account` (`idaccount`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
